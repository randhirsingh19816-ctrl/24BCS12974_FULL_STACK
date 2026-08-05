// src/customHooks/useUser.jsx
import { useContext } from "react";
import { UserContext } from "../contextAPI/UserContext";

export const useUser = () => useContext(UserContext);
