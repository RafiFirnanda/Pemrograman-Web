<script setup>
// Import ref dan onMounted
import { ref, onMounted } from 'vue';

// Import API
import api from '../../api';

// Define state
const alats = ref([]);

// Method untuk fetch data customers
const fetchDataAlats = async () => {
    try {
        const response = await api.get('/api/alats');
        // Set response data ke state "customers"
        alats.value = response.data.data.data;
    } catch (error) {
        console.error("Error fetching alats:", error);
    }
};

// Method untuk menghapus customer
const deleteAlat = async (id) => {
    if (confirm("Are you sure you want to delete this alat?")) {
        try {
            await api.delete(`/api/alats/${id}`); // Fixed line 26
            // Refresh daftar customers
            fetchDataAlats();
        } catch (error) {
            console.error("Error deleting alat:", error);
        }
    }
};


// Jalankan fetch data saat komponen di-mount
onMounted(() => {
    fetchDataAlats();
});
</script>
<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <router-link 
                    :to="{ name: 'alats.create' }" 
                    class="btn btn-md btn-success rounded shadow border-0 mb-3">
                    ADD NEW ALATS
                </router-link>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Nama Item</th>
                                    <th scope="col">Jenis Item</th>
                                    <th scope="col">Jumlah Item</th>
                                    <th scope="col" style="width:15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Tampilkan jika data kosong -->
                                <tr v-if="alats.length === 0">
                                    <td colspan="4" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <!-- Tampilkan data jika tersedia -->
                                <tr v-else v-for="(alat, index) in alats" :key="index">
                                    <td>{{ alat.nama_alat }}</td>
                                    <td>{{ alat.jenis_alat }}</td>
                                    <td>{{ alat.jumlah_alat }}</td>
                                    <td class="text-center">
                                        <router-link 
                                            :to="{ name: 'alats.edit', params: { id: alat.id } }" 
                                            class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">
                                            EDIT
                                        </router-link>
                                        <button 
                                            @click="deleteAlat(alat.id)" 
                                            class="btn btn-sm btn-danger rounded-sm shadow border-0">
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>