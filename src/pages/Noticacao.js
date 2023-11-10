import React, { useEffect, useState } from "react";
import { Notifies } from "../components/Notifies";
import { useGetNotifies } from "../services/notifies/get";

export default function Noticacao({ navigation }) {
  const { data: notifiesData, isFetched } = useGetNotifies();
  const [notifies, setNotifies] = useState([]);

  useEffect(() => {
    if (notifies) {
      setNotifies(notifiesData);
    }
  }, [isFetched]);

  return <Notifies navigation={navigation} notifies={notifies} />;
}
