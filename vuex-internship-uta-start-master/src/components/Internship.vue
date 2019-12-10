<template>
    <div class="internships">
        <h1>Department of Communication</h1>
        <span class="totalInternships">Current Available Internships: {{ internshipItemCount }}</span>

       <!-- <div class="internship">
            <div class="internship-entry">
            <div class="isPopular">Trending</div>
            <span class="internship-views">5 views</span>
            <h2>Name of Internship <span class="internship-identifier">IID# 2</span></h2>

            <p class="internship-location">Dallas</p>
            <div class="button-controls">
                <button class="btnFavorite">
                    <span>Add as Favorite</span>
                    <span>Remove from Favorites</span>
                </button>

                <button class="btnMoreInfo">More Info</button>
                </div>

                <div class="internship-comments">
                </div><h3 class="internship-comments-title">View Comments </h3>
                    <ul class="internship-comment-list">
                        <li class="internship-comment-list-item">
                            <span class="comment-first-name">Brian</span>
                            <span class="comment-last-name">Horton</span>
                            <span class="comment-entry">Great idea!</span>
                        </li>
                    </ul>
                </div>

                <h3 class="internship-comments-title">Leave a Comment</h3>

                <label for="lblFirst">First Name</label>
                <input type="text" class="inpFirst" id="lblFirst" placeholder="First Name" required>

                <label for="lblLast">Last Name</label>
                <input type="text" class="inpLast" id="lblLast" placeholder="Last Name" required>

                <label for="lblComment">Comment</label>
                <input type="text" class="inpComment" id="lblComment" placeholder="Comment" required>

                <button class="btnAddComment">Add Your Comment</button>
            </div>
        </div> -->


        <InternshipEntry />

        <InternshipEntry
        v-for="(internship, index) in sortedInternshipByViews "
        v-bind:key="index"
        :internship="internship"
        />

    </div>
</template>


<script>

import InternshipEntry from '@/components/InternshipEntry'
export default {
   name:"Internship",
   components: {
       InternshipEntry
   },
   computed: {
       internshipItemCount() {
           return this.$store.getters.internshipItemCount;
       },
       displayAllInternships() {
        return this.$store.getters.allInternships;
       },
       sortedInternshipByViews(){
      //  return this.$store.getters.allInternships.sort( (a,b) => {
            //return b.views - a.views
       // } );

       let allInternships = this.$store.getters.allInternships;

       return allInternships.sort(  (a,b)=>  {
           return b.views - a.views
       });
       }
   }
}
</script>
