import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import characterHelper from "helper/characterHelper";
import { dateFormatting } from "utils/dateFormatUtils";

export default function EpTable({ query }) {
  const [epInfo, setEpInfo] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        const result = await Promise.all(
          query.map((url) => characterHelper.getEpisodeInfo(url))
        );
        if (result.error) {
          throw new Error(result.error);
        }
        setEpInfo(result);
      } catch (e) {
        console.log(e);
      }
    }
    if (query && query.length > 0) init();
    //callback function
    return () => {
      setEpInfo([]);
    };
  }, [query]);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Air Date</TableCell>
              <TableCell>Episode</TableCell>
              <TableCell>Create Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {epInfo &&
              epInfo.map((ep) => (
                <TableRow
                  key={ep.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {ep.name}
                  </TableCell>
                  <TableCell>{ep.air_date}</TableCell>
                  <TableCell>{ep.episode}</TableCell>
                  <TableCell>{dateFormatting(ep.created)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
