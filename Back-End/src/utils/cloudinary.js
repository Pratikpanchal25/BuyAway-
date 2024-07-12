import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
    cloud_name: 'ddsxrzg64', 
    api_key: "918898992254413", 
    api_secret: "HVILkusFqvEP6zUB8ACI7DC1AUk"// Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if(!filePath) return null
        const response = await cloudinary.uploader.upload(filePath )
        console.log("The File Has Been Uploaded On Cloudinary");
        fs.unlinkSync(filePath)
        
        return response;
    } catch (error) {
        fs.unlinkSync(filePath)
        return null;
    }
}

export {uploadOnCloudinary}