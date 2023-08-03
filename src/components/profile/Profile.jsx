import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
  
  const [user , setUser] = useState({})
  const [selectedImage, setSelectedImage] = useState(null);
  const [image , setImage] = useState(
    'data:image/png;base64,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'
  )
  useEffect(() => {
    const token = localStorage.getItem('token')
    const getProfile = async () => {
      const { data } = await axios.post('http://localhost:4000/api/v1/auth/me', {token})
      setUser(()=>data.data)
      if (user.profileImage) {
        if (user.profileImage.includes('http://localhost:4000')) {
          setImage(user.profileImage)
          console.log(user.profileImage);
        }
        else{
          setImage("http://localhost:4000/"+data.data.profileImage)
        }
      }
    }
    getProfile()
  }, [image])



  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      let url = ""
      if (user.role === "teacher" ) {
        url = "http://localhost:4000/api/v1/teacher/updateImage"
      }
      else if(user.role === "student"){
        url = "http://localhost:4000/api/v1/user/updateImage"
      }
      const {data} = await axios.put(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', data);
      setImage(()=>data.image)
      setUser((prev)=>({...prev , image:data.image}))
      // Handle the response from the server as needed
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>

      <div className="card">
        <img src={image} alt="John" style={{width:'150px' , borderRadius:"3px" , marginTop:"15px"}} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
        <h1>{user.fullName}</h1>
        {/* <p className="title">CEO & Founder, Example</p> */}
        <p>{user.email}</p>
        <p>{user.role}</p>

        
      </div>

    </div>
  )
}

export default Profile