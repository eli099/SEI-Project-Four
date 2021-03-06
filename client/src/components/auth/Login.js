import React, { useState } from 'react'

import axios from 'axios'

// Import bootstrap
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

// Import react navigation
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  // Navigate
  const navigate = useNavigate()

  // Form data passed by user
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // State to send errors back
  const [errors, setErrors] = useState(false)

  // Update the formData
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log('form data ->', formData)
    setErrors(false)
  }

  // Save the response token to local storage
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('aesthetic', token)
  }

  // Save user profile to local storage
  const saveUserProfile = (user) => {
    // Convert user object to string before saving to localStorage
    window.localStorage.setItem('aesthetic-user', JSON.stringify(user))
  }

  // Submit formData object with input fields to the register endpoint
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      console.log('response ->', data)
      setTokenToLocalStorage(data.token)
      saveUserProfile(data.user)
      console.log('parsed user ->', JSON.parse(window.localStorage.getItem('aesthetic-user')))
      navigate('/')
    } catch (error) {
      console.log('error ->', error)
      console.log('error response ->', error.response)
      // console.log('error response data ->', error.response.data)
      setErrors(true)
    }
  }

  return (
    <div className="auth-page">
      <Container className="p-4 mt-5" lg="6">
        <Row className="">
          <Col md="4" lg={{ span: 6, offset: 3 }}>
            <Card className="p-4 rounded-0 shadow">
              <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3">
                  <FloatingLabel controlId="floatingInput" label="Email">
                    <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel controlId="floatingInput" label="Password">
                    <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                    {errors && <Form.Text className="text-info">Unauthorised</Form.Text>}
                  </FloatingLabel>
                </Form.Group>
                <Button type="submit" className="bg-success bg-opacity-100 border-0">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login