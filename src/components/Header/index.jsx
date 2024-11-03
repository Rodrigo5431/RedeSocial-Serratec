import React from "react";
import { Link } from "react-router-dom";
import { Headerpp, Divi, List, Navigation, Text, Ulist, Tittle } from "./Header.styles";
import Axios from "../../pages/Home/Axios";

export default function Header() {
  return (
    <Headerpp>
      <Divi>
        <Tittle>Techgram</Tittle>
        <Navigation>
          <Ulist>
            <List>
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </List>
            <List>
              <Link to="/Posts">
                <Text>Postagens</Text>
              </Link>
            </List>
            <List>
              <Link to="/configuracoes">
                <Text>Configurações</Text>
              </Link>
            </List>
          </Ulist>
        </Navigation>
      </Divi>
      
    </Headerpp>
  );
}
