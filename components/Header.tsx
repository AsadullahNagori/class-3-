import Link from "next/link";



export default function Home() {
  return (
    <div> 
      <ul className = "flex gap-9 bg-blue-900 ">
      <li> <Link href ="/populer/">populer</Link></li>
      <li>upcoming</li>
     <li>Newley lounched</li>
     
   
      </ul>
     
 
    </div>
  );
}