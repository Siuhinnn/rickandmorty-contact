import { useEffect, useState } from "react";
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";

import CharacterList from "components/CharacterList";

import { ContactListContainer } from "./style";

export default function ContactList() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    setQuery({ name: name, status: status, gender: gender });
  }, [name, status, gender]);

  const handleClear = () => {
    setName("");
    setStatus("");
    setGender("");
    setQuery("");
  };

  return (
    <ContactListContainer>
      <div className="subTitle">
        <h2>Contact</h2>
        <TextField
          label="Search Characters"
          onChange={handleChange}
          variant="standard"
          value={name}
          sx={{ padding: "10px" }}
        />
        <div className="secondRow">
          <div>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={status}
              label="Status"
              onChange={(e) => handleStatusChange(e)}
              variant="standard"
              sx={{ minWidth: "100px" }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="alive">Alive</MenuItem>
              <MenuItem value="dead">Dead</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={(e) => handleGenderChange(e)}
              variant="standard"
              sx={{ minWidth: "100px" }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="genderless">Genderless</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </div>
          {(name || status || gender) && (
            <Button onClick={handleClear}>Clear</Button>
          )}
        </div>
      </div>
      <CharacterList query={query} />
    </ContactListContainer>
  );
}
