import { useEffect, useState } from "react";
import { usePostUser } from "../../../services/users/post";
import { usePutUser } from "../../../services/users/put";

export function useProfile({ navigation, data, isUpdate, id }) {
  const { mutate: postUsers, postIsLoading } = usePostUser({ navigation });
  const { mutate: putUsers, putIsLoading } = usePutUser({ navigation });
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

  return {
    handleSubmit,
    form,
    setForm,
    isLoading: postIsLoading || putIsLoading,
  };
}
