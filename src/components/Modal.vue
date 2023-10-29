<script setup>
const emit = defineEmits(["increment", "next_modal"])

const closeModal = ()=>{
  emit('increment')
}

const nextModal = ()=>{
  emit("next_modal")
}
</script>
<template>
  <div class="relative z-10">
    
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm transition-opacity" @click="closeModal" ></div>
  
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my- sm:w-full sm:max-w-sm sm:p-6">
          <div>
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:my-10">
              <h3 class=" text-2xl font-semibold leading-6 text-gray-900" id="modal-title">Choisisser votre service de paiement</h3>
            </div>
            <fieldset>
              <legend class="sr-only">Paiement par Banque</legend>
              <div class="space-y-5 overflow-y-scroll max-h-64">
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="afrimoney" aria-describedby="comments-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="afrimoney" class="font-medium text-gray-900">Afrimoney</label>
                    <img src="@/assets/images/afrimoney.png" alt="" class="ml-2 w-24 leading-6">
                  </div>
                </div>
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="m_pesa" aria-describedby="candidates-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="m_pesa" class="font-medium text-gray-900">M-Pesa</label>
                    <img src="@/assets/images/mpesa.png" alt="" class="ml-2 w-20">
                  </div>
                </div>
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="offers" aria-describedby="offers-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="offers" class="font-medium text-gray-900">Orange Money</label>
                    <img src="https://download.logo.wine/logo/Orange_Money/Orange_Money-Logo.wine.png" alt="" class="ml-2 w-24">
                  </div>
                </div>
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="airtel_money" aria-describedby="offers-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="airtel_money" class="font-medium text-gray-900">Airtel Money</label>
                    <img src="https://zambianobserver.com/wp-content/uploads/2022/08/Airtel.png" alt="" class="ml-2 w-24">
                  </div>
                </div>
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="visa" aria-describedby="offers-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="visa" class="font-medium text-gray-900">Visa</label>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png" alt="" class="ml-2 w-16">
                  </div>
                </div>
                <div class="relative flex items-start items-center">
                  <div class="flex h-6 items-center">
                    <input id="master_card" aria-describedby="offers-description" name="services" type="radio"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-lg leading-6 flex justify-center items-center">
                    <label for="master_card" class="font-medium text-gray-900">MasterCard</label>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" class="ml-2 w-16">
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="mt-5 sm:mt-3">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="nextModal">suivant</button>
          </div>
          <div class="mt-5 sm:mt-2">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" @click="closeModal">Annuler</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>