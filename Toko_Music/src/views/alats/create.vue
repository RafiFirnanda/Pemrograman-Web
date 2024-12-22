<script setup>
    //import ref
    import { ref } from "vue";
 
    //import router
    import { useRouter } from 'vue-router';
 
    //import api
    import api from "../../api";
 
    //init router
    const router = useRouter();
 
    //define state
    const nama_alat = ref("");
    const jenis_alat = ref("");
    const jumlah_alat = ref("");
    const errors = ref([]);
 
    //method "storePost"
    const storeAlat = async () => {
        //init formData
        let formData = new FormData();
 
        //assign state value to formData
        formData.append("nama_alat", nama_alat.value);
        formData.append("jenis_alat", jenis_alat.value);
        formData.append("jumlah_alat", jumlah_alat.value);
 
        //store data with API
    await api.post('/api/alats', formData)
        .then(() => {
            router.push({ path: "/alats" });
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
                        <form @submit.prevent="storeAlat()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name Item</label>
                                <input type="text" class="form-control" v-model="nama_alat" placeholder="Masukan Nama Item">
                                <div v-if="errors.nama_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.nama_alat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Type Item</label>
                                <input type="text" class="form-control" v-model="jenis_alat" placeholder="Masukan Jenis Item">
                                <div v-if="errors.jenis_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.jenis_alat[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Value</label>
                                <textarea class="form-control" v-model="jumlah_alat" placeholder="Masukan Jumlah"></textarea>
                                <div v-if="errors.jumlah_alat" class="alert alert-danger mt-2">
                                    <span>{{ errors.jumlah_alat[0] }}</span>
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