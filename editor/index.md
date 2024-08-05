---
layout: page
---
<script setup>
    if(!customElements.get('eox-map') await import("@eox/map"))
    if(!customElements.get('eox-jsonform') await import("@eox/jsonform"))
</script>
<style>
    .editor-wrapper {
        top: 50px!important;
    }
</style>
<ClientOnly>
    <eox-storytelling show-editor="open" style="overflow-y: auto;height: calc(100vh - 64px);" markdown="## Start your journey here!"></eox-storytelling>
</ClientOnly>
