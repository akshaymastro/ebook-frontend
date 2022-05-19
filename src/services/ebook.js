import { BaseConfig } from "./config";

export const CreateEbook = async (params) =>
  await BaseConfig.post("/ebook/add", params);

export const GetEbook = async () => await BaseConfig.get("/ebook/all");
export const UpdateEbook = async (id, params) =>
  await BaseConfig.patch(`/ebook/update/${id}`, params);
export const DeleteEbook = async (id) =>
  await BaseConfig.delete(`/ebook/delete/${id}`);
