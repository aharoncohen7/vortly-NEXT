import SearchBar from "@/components/SearchBar";

export default function layout({ children }) {
   return (
      <>
     <SearchBar/>
         {children}
      </>
   )
}
