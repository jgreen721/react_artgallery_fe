import  {useState,useEffect} from "react"


export const useObserver=(ref)=>{
    const [inView,setInView] = useState(false);
   
    const showElement=(e)=>{
        // console.log(e[0])
        if(e[0].isIntersecting){
            // console.log("show element")
            setInView(true)
            console.log("BOUNDINGRECT",e[0].boundingClientRect.bottom)

        }
        else{
            // console.log("hide",e[0].target);
            setInView(false)
            console.log("BOUNDINGRECT",e[0].boundingClientRect.bottom)

        }
        // const bcr = entry[0].boundingClientRect;
        // console.log(bcr)

        // const isBottomVisible = (bcr.bottom < window.innerHeight) && bcr.bottom;
        // console.log(bcr.top, bcr.bottom, window.innerHeight,isBottomVisible)
        //     setInView(isBottomVisible)
        //    retu isBottomVisible;
    
    }
    const viewObserver = new IntersectionObserver(showElement)


    useEffect(()=>{
        if(ref.current)viewObserver.observe(ref.current)
    },[]);


    return {inView}
}