<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    export default {
        mounted() {
            var socket = io('http://127.0.0.1:8090');
            socket.on('news', function (data) {
                console.log(data);
                socket.emit('my other event', { my: 'laravel dashboard' });
            });
            console.log('Component mounted.')
        }
    }
</script>
