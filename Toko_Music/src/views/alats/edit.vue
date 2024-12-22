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
const nama_alat = ref("");
const jenis_alat = ref("");
const jumlah_alat = ref("");
const errors = ref([]);

//onMounted
onMounted(async () => {
    //fetch detail data customer by ID
    await api.get(`/api/alats/${route.params.id}`)
        .then(response => {
            //set response data to state
            nama_alat.value = response.data.data.nama_alat;
            jenis_alat.value = response.data.data.jenis_alat;
            jumlah_alat.value = response.data.data.jumlah_alat;
        });
});

//method "updateCustomer"
const updateAlat = async () => {
    //init formData
    let formData = new FormData();

    //assign state value to formData
    formData.append("nama_alat", nama_alat.value);
    formData.append("jenis_alat", jenis_alat.value);
    formData.append("jumlah_alat", jumlah_alat.value);
    formData.append("_method", "PATCH");

    //store data with API
    await api.post(`/api/alats/${route.params.id}`, formData)
        .then(() => {
            //redirect
            router.push({ path: "/alats" });
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
                        <form @submit.prevent="updateAlat()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name Item</label>
                                <input type="text" class="form-control" v-model="nama_alat" placeholder="Customer Name">
                                <div v-if="errors.nama_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.nama_alat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Type Item</label>
                                <textarea class="form-control" v-model="jenis_alat" rows="3" placeholder="Customer Address"></textarea>
                                <div v-if="errors.jenis_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.jenis_alat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Value</label>
                                <input type="text" class="form-control" v-model="jumlah_alat" placeholder="Customer Phone Number">
                                <div v-if="errors.jumlah_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.jumlah_alat[0] }}</span>
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
