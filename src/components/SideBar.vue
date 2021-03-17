<template>
  <div style="display: contents">
    <h1>
      <a href="/">{{ $static.metadata.siteName }}</a>
    </h1>
    <p>{{ $static.metadata.siteDescription }}</p>
    <hr>
    <ul class="list">
      <li v-for="category in $static.allCategory.edges" :key="category.node.id">
        <g-link :to="category.node.path">{{ category.node.title }} </g-link> ({{ category.node.belongsTo.totalCount }})
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
	siteDescription
  }

  allCategory(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>
