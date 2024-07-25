import React from 'react';
import { useState } from 'react';
 
   
   const NationalId = () => {
    const [nationalId, setnationalId] = useState("");
    return (
   
        <div>
            <div className="nationalId">
                          Upload Image :
                        <input
                            type='file'
                            name='nationalId'
                            accept='image/*'
                            onChange={handleChange}
                            required
                        />
                        {formData.profileImage && (
                            <img
                                src={URL.createObjectURL(formData.profileImage)}
                                alt="Profile"
                                style={{ maxWidth: "80px" }}
                            />
                        )}
                        </div>
        </div>
      );
   }
   
   export default NationalId;
   

