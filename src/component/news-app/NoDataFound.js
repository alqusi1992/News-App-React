import React from "react";
import { Container } from "@mui/material";

function NoDataFound() {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="card">
          <h1 className="news__title">No Data Found</h1>
        </div>
      </div>
    </Container>
  );
}

export default NoDataFound;
