import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem("ongname");
  const ongId = localStorage.getItem("ongid");

  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Error ao deletar caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />

        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower color="#e02041" size={18} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(indicent => (
          <li key={indicent.id}>
            <strong>CASO:</strong>
            <p>{indicent.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{indicent.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
              }).format(indicent.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(indicent.id)}
              type="button"
            >
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
