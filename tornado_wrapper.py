from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from map import app

if __name__ == "__main__":
        http_server = HTTPServer(WSGIContainer(app))
        http_server.listen(3000)
        IOLoop.instance().start()
