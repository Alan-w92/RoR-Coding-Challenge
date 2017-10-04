require 'rails_helper'

RSpec.describe Blog, type: :model do
  describe Blog do
    it { should have_valid(:Id).when(4, 8) }
    it { should_not have_valid(:Id).when('', nil, 'string') }

    it { should have_valid(:title).when('Word', 'String title') }
    it { should_not have_valid(:title).when('', nil) }

    it { should have_valid(:description).when('Word', 'String description') }
    it { should_not have_valid(:description).when('', nil) }

    it { should have_valid(:author).when('Word', 'String author') }
    it { should_not have_valid(:author).when('', nil) }
  end
end
