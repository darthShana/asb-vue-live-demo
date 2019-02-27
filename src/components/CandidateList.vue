<template>
    <div>
        <h4>Candidate List</h4>
        <ul>
            <li v-for="candidate in candidateList" :key="candidate.candidateName">
                {{candidate.candidateName}}:{{candidate.candidateDescription}}
            </li>
        </ul>

        <candidate-creation></candidate-creation>
    </div>
</template>

<script>
    import CandidateCreation from './CandidateCreation.vue'
    export default {
        name: "CandidateList",

        components: {CandidateCreation},

        computed: {
            candidateList(){
                return this.$store.state.candidateList
            }
        }

    }


</script>