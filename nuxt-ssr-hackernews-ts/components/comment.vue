<template>
  <li v-if="comment" class="comment">
    <div class="by">
      <router-link :to="'/user/' + comment.user">{{ comment.user }}</router-link>
      {{ comment.time | timeAgo }} ago
    </div>
    <div class="text" v-html="comment.content"/>
    <div v-if="comment.comments && comment.comments.length" :class="{ open }" class="toggle">
      <a
        @click="open = !open"
      >{{ open ? '[-]' : '[+] ' + pluralize(comment.comments.length) + ' collapsed' }}</a>
    </div>
    <ul v-show="open" class="comment-children">
      <comment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        :comment="childComment"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({})
export default class Comment extends Vue {
  @Prop({ type: Object, required: true })
  comment: any

  open: boolean = true

  pluralize(n) {
    return n + (n === 1 ? " reply" : " replies")
  }
}
</script>

<style lang="stylus">
.comment-children {
  .comment-children {
    margin-left: 1.5em;
  }
}

.comment {
  border-top: 1px solid #eee;
  position: relative;

  .by, .text, .toggle {
    font-size: 0.9em;
    margin: 1em 0;
  }

  .by {
    color: #828282;

    a {
      color: #828282;
      text-decoration: underline;
    }
  }

  .text {
    overflow-wrap: break-word;

    a:hover {
      color: #ff6600;
    }

    pre {
      white-space: pre-wrap;
    }
  }

  .toggle {
    background-color: #fffbf2;
    padding: 0.3em 0.5em;
    border-radius: 4px;

    a {
      color: #828282;
      cursor: pointer;
    }

    &.open {
      padding: 0;
      background-color: transparent;
      margin-bottom: -0.5em;
    }
  }
}
</style>
