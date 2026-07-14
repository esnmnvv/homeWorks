import { Meta } from "antd/es/list/Item";
import { useRecipes } from "../hooks/useRecipes";
import { Button, Card, Form, Input, Select } from "antd";
import { useMutateRecipe } from "../hooks/useMutateRecipe";
import { useState } from "react";
import { useRecipesTags } from "../hooks/useRecipesTags";

export const ReciptList = () => {
  const { mutate: createRecipe } = useMutateRecipe();
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState();
  const { data } = useRecipes(search, tag);
  const { data: tags = [] } = useRecipesTags();

  const handleSearche = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (values) => {
    createRecipe({
      name: values.name,
      instructions: [values.instructions],
    });
  };
  return (
    <>
      <div className="mb-4">
        <Form onFinish={(values) => handleAdd(values)} layout="vertical">
          <Form.Item
            name={"name"}
            required
            rules={[{ required: true, message: "Заполните это поле!" }]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item name={"instructions"}>
            <Input placeholder="instructions" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Add</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="flex gap-3 px-6">
        <Input
          value={search}
          onChange={handleSearche}
          placeholder="Search recipes"
        />
        <Select
          allowClear
          showSearch
          value={tag}
          onChange={setTag}
          placeholder="Select tag"
          style={{ minWidth: 220 }}
          options={tags.map((tag) => ({ label: tag, value: tag }))}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center justify-items-center p-6">
        {data?.recipes?.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              hoverable
              variant="borderless"
              style={{ width: 240 }}
              cover={<img draggable={false} alt="example" src={recipe.image} />}
            >
              <Meta title={recipe.name} description={recipe.cuisine} />
            </Card>
          );
        })}
      </div>
    </>
  );
};
