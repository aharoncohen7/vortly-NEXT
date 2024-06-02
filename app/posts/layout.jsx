
import SearchPosts from "@/components/SearchPosts";

export default function layout({ children }) {
   return (
      <>
     <SearchPosts/>
         {children}
      </>
   )
}
