<script setup>
// Import ref
import { ref } from "vue";

// Import router
import { useRouter } from 'vue-router';

// Import API
import api from "../../api";

// Initialize router
const router = useRouter();

// Define state
const name = ref("");
const alamat = ref("");
const no_telp = ref("");
const errors = ref([]);

// Method "storeCustomer"
const storeCustomer = async () => {
    // Initialize formData
    let formData = new FormData();

    // Assign state value to formData
    formData.append("name", name.value);
    formData.append("alamat", alamat.value);
    formData.append("no_telp", no_telp.value);

    // Store data with API
    await api.post('/api/customers', formData)
        .then(() => {
            // Redirect to customers list page
            router.push({ path: "/customers" });
        })
        .catch((error) => {
            // Assign response error data to state "errors"
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
                        <form @submit.prevent="storeCustomer()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name</label>
                                <input type="text" class="form-control" v-model="name" placeholder="Masukan Nama">
                                <div v-if="errors.name" class="alert alert-danger mt-2">
                                    <span>{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Address</label>
                                <input type="text" class="form-control" v-model="alamat" placeholder="Masukan Alamat">
                                <div v-if="errors.alamat" class="alert alert-danger mt-2">
                                    <span>{{ errors.alamat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Phone Number</label>
                                <input type="tel" class="form-control" v-model="no_telp" placeholder="Masukan Nomor Telpon">
                                <div v-if="errors.no_telp" class="alert alert-danger mt-2">
                                    <span>{{ errors.no_telp[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
