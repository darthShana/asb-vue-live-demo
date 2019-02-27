<template>
    <div>
        <h4>New Candidate</h4>
        <form>
            Candidate Name:<input v-model="newCandidateName"/>
            Candidate Description<input v-model="newCandidateDescription"/>
            <button type="button" v-on:click="addCandidate">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CandidateCreate',

        data() {
            return {
                newCandidateName:'',
                newCandidateDescription:''
            }
        },

        methods: {
            addCandidate(){
                this.$store.dispatch('new_candidate', {
                    candidateName:this.newCandidateName,
                    candidateDescription:this.newCandidateDescription
                })
                this.newCandidateName = ''
                this.newCandidateDescription = ''
            }
        }
    }
</script>