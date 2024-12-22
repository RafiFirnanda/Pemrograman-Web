<script setup>
//import ref
import { ref, onMounted } from "vue";

//import router
import { useRouter, useRoute } from 'vue-router';

//import api
import api from "../../api";

//init router
const router = useRouter();

//init route
const route = useRoute();

//define state
const name = ref("");
const alamat = ref("");
const no_telp = ref("");
const errors = ref([]);

//onMounted
onMounted(async () => {
    //fetch detail data customer by ID
    await api.get(`/api/customers/${route.params.id}`)
        .then(response => {
            //set response data to state
            name.value = response.data.data.name;
            alamat.value = response.data.data.alamat;
            no_telp.value = response.data.data.no_telp;
        });
});

//method "updateCustomer"
const updateCustomer = async () => {
    //init formData
    let formData = new FormData();

    //assign state value to formData
    formData.append("name", name.value);
    formData.append("alamat", alamat.value);
    formData.append("no_telp", no_telp.value);
    formData.append("_method", "PATCH");

    //store data with API
    await api.post(`/api/customers/${route.params.id}`, formData)
        .then(() => {
            //redirect
            router.push({ path: "/customers" });
        })
        .catch((error) => {
            //assign response error data to state "errors"
            errors.value = error.response.data;
        });
};
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="updateCustomer()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name</label>
                                <input type="text" class="form-control" v-model="name" placeholder="Customer Name">
                                <div v-if="errors.name" class="alert alert-danger mt-2">
                                    <span>{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Alamat</label>
                                <textarea class="form-control" v-model="alamat" rows="3" placeholder="Customer Address"></textarea>
                                <div v-if="errors.alamat" class="alert alert-danger mt-2">
                                    <span>{{ errors.alamat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nomor Telepon</label>
                                <input type="text" class="form-control" v-model="no_telp" placeholder="Customer Phone Number">
                                <div v-if="errors.no_telp" class="alert alert-danger mt-2">
                                    <span>{{ errors.no_telp[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
