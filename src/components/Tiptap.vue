<template>
  <section class="py-4 flex flex-col gap-6 container mx-auto w-[65ch]">
    <section class="flex justify-between">
      <section class="flex gap-2">
        <button class="btn btn-sm" @click="addImage">
          Add Image
        </button>

        <button class="btn btn-sm" @click="addVideo">
          Add Video
        </button>

        <!-- <button class="btn btn-sm" @click="consoleHtml">
          Console Html
        </button> -->
      </section>
      <section class="flex gap-2">
        <a class="btn btn-sm btn-outline btn-secondary" href="https://github.com/sponsors/sereneinserenade" >
          <i class="i-mdi-heart" /> &nbsp; Support My Work
        </a>

        <a class="btn btn-sm" @click="consoleHtml">
          <i class="i-mdi-github" /> &nbsp; Github Repo
        </a>
      </section>
    </section>

    <editor-content :editor="editor" />
  </section>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ref } from 'vue';

import { ResizableMedia } from './resizableMedia'
import { content } from './tiptapData'

const editor = useEditor({
  content: content,
  extensions: [
    StarterKit,
    ResizableMedia,
  ],
  editorProps: {
    attributes: {
      class: 'focus:outline-none prose mx-auto'
    }
  }
})

const addImage = () => editor.value?.commands.setMedia({
  src: 'https://source.unsplash.com/8xznAGy4HcY/800x400',
  'media-type': 'img',

  alt: 'Something else',
  title: 'Something',
  width: '800',
  height: '400',
})

const videoUrl = ref('https://user-images.githubusercontent.com/45892659/178123048-0257e732-8cc2-466b-8447-1e2b7cd1b5d9.mov')

const addVideo = () => editor.value?.commands.setMedia({
  src: videoUrl.value,
  'media-type': 'video',

  alt: 'Some Video',
  title: 'Some Title Video',
  width: '400',
  height: '400'
})

const consoleHtml = () => console.log(editor.value?.getHTML())

</script>
