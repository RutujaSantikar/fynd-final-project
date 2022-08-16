<template>
  <div>
    <button
      @click="openModal"
      type="submit"
      class="btn-create-program"
      id="createBtn"
    >
      Create Program
    </button>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        
          <h5 class="title card-title program-name">MEVN Stack</h5>
          <h6 class="title card-subtitle teacher-name">Prashant Puranik</h6>
        
    
        </div>
        <div class="description program-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis ipsum similique veritatis corrupti quas hic ad dignissimos est dolorum nemo doloremque modi asperiores itaque beatae, fugiat inventore quia dolores.</div>
      </div>
      <div class="create-program-container">
        <div class="create-program-card">
        
          <form action="" id="createProgramForm" class="create-program-form">
            <div><label for="programName">Program Name</label></div>
            <input type="text" name="programName" id="program-Name" placeholder="ex.MEVN stack"/>
            <div><label for="programDes">Description</label></div>
            <textarea name="programDescription" id="program-Description" cols="30" rows="2" placeholder="Short description about program"></textarea>
           
            
            
            <div><label for="text">Teacher Name</label></div>
            <input type="text" name="teacherName" id="teacher-Name" placeholder="ex.Puranik Prashant"/>
            <div><button type="submit" class="create-btn">Create</button></div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AppPrograms",
  

  };
</script>

<style scoped>
* {
  font-family: "Tajawal", sans-serif;
}
.btn-create-program {
  background-color: #001b48;
  color: white;
  padding: 0.9em;
  border-radius: 0.4em;
  border: none;
  margin-left: 10em;
}
.card-body{
    background-color: #018abe;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    
}
.title{
        color: white;
}
.description{
    padding: 0.7em;
}
 .create-program-container{
      width: 40%;
      margin: 5em auto;
  }
  .create-program-card{
      
       background-color: white;
       /* box-shadow: 2px 2px 5px 2px lightslategrey; */
       border: 1px solid lightgray;
  
  
      border-radius: 6px;
  }
  input,textarea{
      width: 100%;
      padding: 0.7em;
      /* border-radius: 4px; */
      border-radius: 15px;
      outline-style: none;
      border: 1px solid lightgray;
      
  }
  .create-program-form{
      color: #001b48;
      font-weight: 530;
  padding: 2em;
  }
  .create-program-form div{
      margin: 0.8em 0em;
  }
  .create-btn{
      /* background-color: #02457a; */
      background-color: #002d40;
        border: none;
      border-radius: 15px;
  
      color: white;
      font-size: 1em;
      padding: 0.9em;
      margin-top: 0.4em;
      width: 100%;
      
  }
</style>
