import {getDownloadURL,uploadBytesResumable,ref,getStorage} from 'firebase/storage'
import app from './firebase'

const [img,setImg] = useState("");
const [fileup,setFileup] = useState(null);
const handleFileChange = (e)=>{
  setFileup(e.target.files[0])
}
const uploadHandle = (e)=>{
    e.preventDefault()
    const filename = new Date().getTime() + fileup.name
    const storage = getStorage(app)
    const storageRef = ref(storage,filename)
    const uploadTask = uploadBytesResumable(storageRef, fileup);

    uploadTask.on('state_changed', {
      next: (snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress ",progress," %");
      },
      complete:()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImg(downloadURL)
        });
      }
    }
    );

  }