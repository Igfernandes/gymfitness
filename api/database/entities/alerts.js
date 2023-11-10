import { ONLY_SPACES } from "../../../src/constants/regex";

export function Alerts() {
  this.table = "alerts";
  this.attributes = {
    id: null,
    title: null,
    describe: null,
    published_at: null,
    created_at: null,
    updated_at: null,
  };

  this.getId = () => {
    return this.attributes.id;
  };

  this.setId = (id) => {
    if (
      (typeof id != "bigint" && typeof id != "number") ||
      ONLY_SPACES.test(id)
    )
      throw new Error("O id inserido não é um numero válido");

    this.attributes.id = id;
  };

  this.getTitle = () => {
    return this.attributes.title;
  };

  this.setTitle = (title) => {
    this.attributes.title = title;
  };

  this.getDescribe = () => {
    return this.attributes.describe;
  };

  this.setDescribe = (describe) => {
    this.attributes.describe = describe;
  };

  this.setPublishedAt = (publishedAt) => {
    this.attributes.published_at = publishedAt;
  };

  this.getPublishedAt = () => {
    return this.attributes.published_at;
  };

  this.getCreatedAt = () => {
    return this.attributes.created_at;
  };

  this.setCreatedAt = (createdAt) => {
    this.attributes.created_at = createdAt;
  };

  this.getUpdatedAt = () => {
    return this.attributes.updated_at;
  };

  this.setUpdatedAt = (updateddAt) => {
    this.attributes.updated_at = updateddAt;
  };
}
