<script setup>
// Import ref dan onMounted
import { ref, onMounted } from 'vue';

// Import API
import api from '../../api';

// Define state
const customers = ref([]);

// Method untuk fetch data customers
const fetchDataCustomers = async () => {
    try {
        const response = await api.get('/api/customers');
        customers.value = response.data.data.data;
    } catch (error) {
        console.error("Error fetching customers:", error);
    }
};

// Method untuk menghapus customer
const deleteCustomer = async (id) => {
    if (confirm("Are you sure you want to delete this customer?")) {
        try {
            await api.delete(`/api/customers/${id}`);
            fetchDataCustomers();
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    }
};

// Fetch data saat komponen di-mount
onMounted(() => {
    fetchDataCustomers();
});
</script>

<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="fw-bold text-primary">Customer Management</h4>
                    <router-link 
                        :to="{ name: 'customers.create' }" 
                        class="btn btn-md btn-success rounded shadow border-0">
                        <i class="bi bi-plus-circle"></i> ADD NEW CUSTOMER
                    </router-link>
                </div>
                <div class="card border-0 rounded shadow">
                    <div class="card-body p-4">
                        <table class="table table-hover table-bordered text-center">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Nomor Telpon</th>
                                    <th scope="col" style="width: 20%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Tampilkan jika data kosong -->
                                <tr v-if="customers.length === 0">
                                    <td colspan="4">
                                        <div class="alert alert-danger mb-0">
                                            <i class="bi bi-exclamation-triangle"></i> Data Belum Tersedia!
                                        </div>
                                    </td>
                                </tr>
                                <!-- Tampilkan data jika tersedia -->
                                <tr v-else v-for="(customer, index) in customers" :key="index">
                                    <td>{{ customer.name }}</td>
                                    <td>{{ customer.alamat }}</td>
                                    <td>{{ customer.no_telp }}</td>
                                    <td>
                                        <router-link 
                                            :to="{ name: 'customers.edit', params: { id: customer.id } }" 
                                            class="btn btn-sm btn-primary rounded shadow-sm border-0 me-2">
                                            <i class="bi bi-pencil-square"></i> EDIT
                                        </router-link>
                                        <button 
                                            @click="deleteCustomer(customer.id)" 
                                            class="btn btn-sm btn-danger rounded shadow-sm border-0">
                                            <i class="bi bi-trash"></i> DELETE
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
