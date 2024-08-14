import React from 'react';
import Image from '../assets/contact.jpg'

const Contact = () => {
  return (
   <div
   className=" inset-0 relative w-full h-screen bg-cover bg-center "
   style={{  
      backgroundImage: `url(${Image})`,  
 }} 
   >
    

    <div class="max-w-4xl mx-auto p-6  bg-white shadow-lg rounded-lg mb-8">
        <h1 class="text-3xl font-semi-bold text-center mb-4 text-gray-800">Me contecter</h1>
        <p className='text-center mb-8 underline underline-offset-8 decoration-blue-500 decoration-4 '>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
        <div class="flex flex-col m-4 md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8 ">
            <div class="w-full  md:w-1/2">
                <form action="#" method="post" class="space-y-6">
                    
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700"></label>
                        <input type="text" id="name" name="name"  placeholder="Votre nom" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700"></label>
                        <input type="text" id="mail" name="mail" required placeholder="Votre address email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"/> 
                    </div>
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700"></label>
                        <input type="text" id="numéro" name="numéro" required placeholder="Votre numéro de téléphone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700"></label>
                        <input type="text" id="email" name="email" required placeholder="Sujet" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700"></label>
                        <textarea id="message" name="message" rows="5" required placeholder="Votre message" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button  type="submit" class=" py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Envoyer</button>
                    </div>
                </form>
            </div>
            <div class="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Mes coordonnées</h2>
          <p className="mb-2">210 Avenue du 8 mai 1945, 93150 le blanc mesnil</p>
          <p className="mb-2">Téléphone: 06 05 69 85 61</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509858!2d144.95565131550453!3d-37.81731397975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f91fd7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600419484261!5m2!1sen!2sus"
                    class="w-full h-8 md:h-80 border-0 rounded-lg shadow-sm" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Contact;
