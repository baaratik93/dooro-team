<template>
<v-timeline class="timeline hidden-sm-and-down">
                <v-timeline-item>
                    <template v-slot:icon>
                            <img src="~/assets/php.png" width="80px" height="80px" />
                    </template>
                      <time-line class="ml-13" :liste="php"/>
                </v-timeline-item>
                <v-timeline-item color="#748B9C" class="text-right">
                    <template v-slot:icon>
                            <img src="~/assets/js.png" height="90" width="190"/>
                    </template>
                    <time-line class="mcardr-12" :liste="js"/>
                </v-timeline-item>
                <v-timeline-item>
                    <template v-slot:icon>
                            <img src="~/assets/css.png" height="95px" width="150px"/>
                    </template>
                    <time-line class="ml-13" :liste="css"/>
                </v-timeline-item>
              </v-timeline>
</template>