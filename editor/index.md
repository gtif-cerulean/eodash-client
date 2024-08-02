---
layout: page
---
<script setup>
    import '@eox/jsonform';
    import '@eox/map';
</script>
<style>
    .editor-wrapper {
        top: 50px!important;
    }
</style>
<ClientOnly>
    <eox-storytelling show-editor="open" style="overflow-y: auto;height: calc(100vh - 64px);" markdown="## Start your journey here!"></eox-storytelling>
</ClientOnly>
