<template>
    <div class="VueTables__search-field">
        <input class="VueTables__search__input"
               type="text"
               placeholder="جستجوی کلی"
               @keyup="e=>props.search(props.debounce)(e)"
               :id="`VueTables__search_${props.id}`"
               autocomplete="off"
        />
    </div>
</template>

<script>
    export default {
        name: "VtGenericFilter",
        props: ['props']
    }
</script>
<style scoped>
.VueTables__search__input{
    border: 1px solid #dadde4;
    padding: .2rem .5rem;
    border-radius: 1rem;
    color: #7e7e7e;
}
.VueTables__search__input:focus{
    outline: 0;
}
.VueTables__search__input::placeholder{
    color: #dadde4;
}
.VueTables__search{
    margin-bottom: .8rem;
    margin-right: .5rem;
    margin-top: .3rem;
}
.VueTables__search-field{
    margin-bottom: 15px;
}
</style>