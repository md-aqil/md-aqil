
async function getPosts(status) {
    let q = `filters[]={"condition":"equal","field":"data.type","value":"posts"}`;
    if (status) {
      q += `&filters[]={"condition":"equal","field":"data.work_status","value":"${status}"}`;
    }
    const response = await fetch('https://app.bigradar.io/api/users?' + q, {
    headers: {
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDAyOTE3NzhkNTQzZjQzOGMzMjY4MTUiLCJpYXQiOjE2MTA3ODEwNDc1NDR9.Nbw8mny7BQeRedna9uzWZ7zzqTqQL1A8S5cxucSEBxE'
    }
  });
  return await response.json();
}

function slugify(str) {
    return str.trim().toLowerCase().replace(/[^\w\d]+/g, '-');
}

function categorize(rows) {
    var data = {};
    const categories = []
    for (const row of rows) {
        const cat = row.data.category;
        const slug = slugify(cat);
        if (!categories.includes(cat)) {
            categories.push({ id: slug, name: cat })
        }
        if (!data[slug]) {
            data[slug] = [];
        }
        data[slug].push(row);
    }
    return [ categories, data ];
}
    
// var app = new Vue({
//       el: '#rootpost',
//       data() {
//         return {
//             categories: [],
//             posts: {}
//         }
//       },
//       async mounted() {
//         const raw = await getPosts();
//         const [ categories, posts ] = categorize(raw.docs);
//         console.log({categories, posts});
//         this.posts = posts;
//         this.categories = categories;
//       },
// })
