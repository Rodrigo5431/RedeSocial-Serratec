import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Principal, Ulist } from "./Home.style.jsx";

export default function Axios() {
  const [conteudo, setConteudo] = useState("");
  //   const [sobreNome, setSobreNome] = useState("");
 // const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [avatar, setAvatar] = useState();

  const listaUsuarios = () => {
    axios
      .get("https://6726778f302d03037e6d981a.mockapi.io/Postagens")
      .then((response) => {
        setUsuarios(response.data);
      });
  };
  useEffect(() => {
    listaUsuarios();
  }, []);

  return (
    <Principal>
      <div>
        <Ulist>
          {usuarios.map((user) => (
            <List key={user.id}>
              {user.conteudo} {user.avatar}
            </List>
          ))}
        </Ulist>
      </div>
    </Principal>
  );
}
