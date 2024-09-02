// src/components/NavbarMenu.jsx
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import courseImg from "../../img/online courses.jpg";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slice/searchSlice";
import { Link } from "react-router-dom";

function NavbarMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchTerm));
  };

  return (
    <Navbar expand="lg" className="bg-amber-100 shadow-md fixed-top">
      <Container fluid>
        <Link to={"/"} className="no-underline">
        <Navbar.Brand href="#" className="flex flex-row space-x-2 lg:mr-5 md:mr-0 mr-0">
          <img
            src={courseImg}
            alt="course image"
            className="w-12 h-12 rounded-full"
          />{" "}
          
          <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 bg-clip-text text-transparent my-auto ">Alemeno</p>
          
        </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 space-x-5 font-bold ml-3"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Link to="/" className="no-underline">
              <Navbar.Text className="lg:ml-0 md:ml-5 ml-5">Home</Navbar.Text>
            </Link>
            <Link to={"/courses"} className="no-underline">
              <Navbar.Text>Courses</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/dashboard"}>
              <Navbar.Text>Student Dashboard</Navbar.Text>
            </Link>

            <Link className="no-underline" to={"/about"}>
              <Navbar.Text>About Us</Navbar.Text>
            </Link>
            <Link className="no-underline" to={"/contact"}>
              <Navbar.Text>Contact Us</Navbar.Text>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search by name or instructor"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
