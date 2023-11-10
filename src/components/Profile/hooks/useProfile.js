import { useEffect, useState } from "react";
import { usePostUser } from "../../../services/users/post";
import { usePutUser } from "../../../services/users/put";
import { useDeleteUser } from "../../../services/users/delete";

export function useProfile({ navigation, data, isUpdate, id }) {
  const { mutate: deleteUser, isLoading: deleteIsLoading } = useDeleteUser({ navigation });
  const { mutate: postUsers, isLoading: postIsLoading } = usePostUser({ navigation });
  const { mutate: putUsers,  isLoading: putIsLoading } = usePutUser({ navigation });
  const [form, setForm] = useState({
    name: data.name ?? "",
    birthdate: data.birthdate ?? "",
    gender: data.gender ?? "",
    cpf: data.cpf ?? "",
    cep: data.cep ?? "",
    email: data.email ?? "",
    mobile: data.mobile ?? "",
    height: data.height ?? "",
    weight: data.weight ?? "",
    password: data.password ?? "",
    status: data.status ?? "",
  });

  useEffect(() => {
    if (data)
      setForm({
        name: data.name ?? "",
        birthdate: data.birthdate ?? "",
        gender: data.gender ?? "",
        cpf: data.cpf ?? "",
        cep: data.cep ?? "",
        email: data.email ?? "",
        mobile: data.mobile ?? "",
        height: data.height ?? "",
        weight: data.weight ?? "",
        password: data.password ?? "",
        status: data.status ?? "",
      });
  }, [data]);

  const handleSubmit = () => {
    if (isUpdate) putUsers({ id, ...form });
    else postUsers(form);
  };

  const handleDeleteUser = () => {
    deleteUser(id)
  }

  return {
    handleSubmit,
    form,
    setForm,
    isLoading: postIsLoading || putIsLoading,
    deleteIsLoading,
    handleDeleteUser
  };
}
