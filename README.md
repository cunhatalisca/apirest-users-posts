# apirest-users-posts

<h1>API posts</h1>
  <p>This is a post APIRest project.</p>

<h2>Summary 🗂️</h2>
  <li><a href="#Functionalities">Functionalities</a></li>
  <li><a href="#notes">Notes</a></li>
  <li><a href="#endpoint">Endpoint</a></li>

<h2  id="Functionalities">📑Functionalities</h2>
<ul>
<h3>Technologies and tools 🖥️</h3>
<li>NodeJS</li>
<li>PostgreSQL</li>
<li>Express</li>
<li>Nodemon</li>
  </ul>
     <h3>C.R.U.D (Create, Read, Update, Delete)</h3>
      <li>List all customers and posts</li>
      <li>Register a new user or post</li>
      <li>Break down a post's information</li>
      <li>Delete a user or post</li>
      <li>Update information about a user or post</li>

      
  <h1 id="endpoint">Endpoint</h1>
  ### Example of a request to register a user
  
  ```json
{
	"nome": "gabriel",
	"email": "gabriel@test.com",
}
  ```
  
  ### Exemplo de Resposta
  ```json
     {
	"id": 1,
	"nome": "gabriel",
	"email": "gabriel@test.com",
    "created_at": "2023-07-11T12:10:22.0577"
}
  ``` 

 <h2 id="notes">Notes❗</h2>
  <p>This project is just a basic demonstration of a post register using Javascript NodeJS and Database. For learning and development purposes.</p>
  
