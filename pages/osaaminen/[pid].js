import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { attributes } from '../../content/competences.md';
import GeneralHeader from '@components/GeneralHeader';
import SkillPageContent from '@components/SkillPageContent';


export default function SkillArea({ lan }) {
    const router = useRouter()
    const { pid } = router.query
    const [skillarea, setSkillarea] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        for(let i=0; i < attributes.items.length; i++){
            if(pid){
                if( attributes.items[i].url.toLowerCase() === pid.toLowerCase() ){
                    setSkillarea(attributes.items[i])
                    setLoading(false)
                    return(0)
                }
            }

        }
    });
    return(
        loading ? 
        <div>
            Loading
        </div>
        :
        <div>
            <GeneralHeader title={skillarea.title} img={skillarea.skillIMG} lan={lan} description={skillarea.short}/>
            <div className='powder'>
                <SkillPageContent  item = {skillarea} lan={lan}/>
            </div>
        </div>
    )
  }
  

  // 