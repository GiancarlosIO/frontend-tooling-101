class WebpackCSSStaticFilesNode(StaticNode):
    def url(self, context):
        path = self.path.resolve(context)
        try:
            static_path = static(path)
            return '<link rel="stylesheet" href="%s">' % static_path
        except ValueError as e:
            logger.warning(e.message)
            return '<!-- static:%s -->' % path

@register.tag('webpack_css')
def webpack_css_static(parser, token):
    return WebpackCSSStaticFilesNode.handle_token(parser, token)




    