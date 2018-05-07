from django.contrib.auth.models import User
from rest_framework import serializers

from snippets.models import Snippet


class SimpleUserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username')


class UserSerializer(SimpleUserSerializer):
    snippets = serializers.HyperlinkedRelatedField(
        many=True, view_name='snippet-detail', read_only=True)

    class Meta(SimpleUserSerializer.Meta):
        fields = SimpleUserSerializer.Meta.fields + ('snippets',)


class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    # owner = serializers.ReadOnlyField(source='owner.username')
    owner = SimpleUserSerializer()
    highlight = serializers.HyperlinkedIdentityField(
        view_name='snippet-highlight', format='html')

    class Meta:
        model = Snippet
        fields = ('url', 'id', 'highlight', 'owner', 'title', 'code',
                  'linenos', 'language', 'style')
