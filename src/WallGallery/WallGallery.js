import {useEffect,useState} from 'react'
import axios from 'axios';
import './WallGallery.css'

const WallGallery = (props) => {
    const [imageList, setImageList] = useState([]);
    const [imageData, setImageData] = useState({});
    const [openCloseImage, setOpenCloseImage] = useState(false);

    useEffect(() => {
        getImageData()
        
    }, []);
   

    const getImageData = ()=>{
        axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0').then( res =>{
            // console.warn("(((( IMAGE___LISTTT Resppp  )))) ====>>>",res.data)
            setImageList(res.data)
          
        })
    }

    const openImageFunc = (event)=>{
        setOpenCloseImage(true)
        setImageData(event)
    }
  
    return (
        <div>
            <div style={{display:'flex',flexFlow:'wrap'}}>
            {
                imageList.map( data =>{
                    return(
                        <div onClick={ ()=>openImageFunc(data)} className="imageStyle" >
                            <img src={data.urls.full}  alt="photos" />
                        </div>
                    )
                })
            }
            </div>
            { openCloseImage == true &&
                <div style={{justifyContent:'center',alignItems:'center'}}>
                    <dialog
                        className="overlay"
                        open
                        onClick={ ()=> setOpenCloseImage(false)} >
                        <div className="whole-container popup-container-width" >
                            <img src={imageData.urls.full} className="popup-image"  alt="photos" />
                        </div>
                    </dialog>
                    <div>
                        
                    </div>
                </div>
            }
           
        </div>
    )
}

export default WallGallery
