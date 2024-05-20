"use client"

import { createHotelAction } from "@/server/BL/actions/hotel.action"


export default function HotelForm() {

  return (
   <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Hotel</h1>
        
        <form action={createHotelAction} className="space-y-4">
           <input type="text" readOnly className="hidden" name='id' value={'9j9sfje9jrwe9jf9wejeer'} />
        <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              
          <input
            type="text"
            name='image'
            className={`mt-1 block w-full  rounded-md shadow-sm`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            name='slug'
            className={`mt-1 block w-full rounded-md shadow-sm`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name='title'
            className={`mt-1 block w-full  rounded-md shadow-sm`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name='location'
            className={`mt-1 block w-full rounded-md shadow-sm`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name='description'
            className={`mt-1 block w-full rounded-md shadow-sm`}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name='price'
            className={`mt-1 block w-full  rounded-md shadow-sm`}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
          >
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  )
}
